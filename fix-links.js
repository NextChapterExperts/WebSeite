/**
 * Ändert <a href="/..."> zu <Link href="...">...</Link>
 */

export default function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);

  // Prüfen, ob Link bereits importiert wird
  const hasLinkImport = root.find(j.ImportDeclaration, {
    source: { value: 'next/link' },
  }).size() > 0;

  // Ändere alle <a href="/...">
  root.find(j.JSXElement, {
    openingElement: { name: { name: 'a' } },
  }).forEach((path) => {
    const opening = path.node.openingElement;
    const hrefAttr = opening.attributes.find(
      (attr) =>
        attr.type === 'JSXAttribute' &&
        attr.name.name === 'href' &&
        attr.value.type === 'Literal' &&
        attr.value.value.startsWith('/')
    );

    if (hrefAttr) {
      // Ersetze Name a -> Link
      opening.name.name = 'Link';
      if (path.node.closingElement) {
        path.node.closingElement.name.name = 'Link';
      }

      // Behalte alle anderen Props, belasse href
      // Import hinzufügen falls nötig
      if (!hasLinkImport) {
        root
          .find(j.ImportDeclaration)
          .at(0)
          .insertBefore(
            j.importDeclaration(
              [j.importDefaultSpecifier(j.identifier('Link'))],
              j.literal('next/link')
            )
          );
      }
    }
  });

  return root.toSource();
}
