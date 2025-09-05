declare module '@babel/traverse' {
    import { NodePath, Visitor } from '@babel/traverse';
    import { Node } from '@babel/types';
    export type TraverseOptions<S = Node> = Visitor<S>;
    export default function traverse(
        node: Node,
        opts: TraverseOptions,
        scope?: any,
        state?: any,
        parentPath?: NodePath
    ): any;
}