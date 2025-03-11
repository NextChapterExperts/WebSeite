"use client";

import { MDXRemote } from "next-mdx-remote";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

interface ClientMDXRendererProps {
  source: MDXRemoteSerializeResult;
}

export default function ClientMDXRenderer({ source }: ClientMDXRendererProps) {
  return <MDXRemote {...source} />;
}
