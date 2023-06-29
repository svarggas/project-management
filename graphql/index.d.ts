import { GraphQLResolveInfo } from "graphql";
import { prisma } from "~/prisma/client";

export interface CustomContext {
    req: NextRequest;
    prisma: typeof prisma;
    user: Record<string, any> | null | undefined;
}

export type ResolverFunc<Args = unknown, Parent = unknown, Return = unknown> = (
    parent: Parent,
    args: Args,
    ctx: CustomContext,
    info?: GraphQLResolveInfo
) => Promise<Return>;