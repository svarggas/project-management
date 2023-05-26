import { GraphQLResolveInfo } from "graphql";

export interface CustomContext {
    req: NextRequest;
    prisma: any;
}

export type ResolverFunc<Args = unknown, Parent = unknown, Return = unknown> = (
    parent: Parent,
    args: Args,
    ctx: CustomContext,
    info?: GraphQLResolveInfo
) => Promise<Return>;