import { GraphQLResolveInfo } from "graphql";
import PrismaClient from "~/prisma/client";

export interface CustomContext {
    req: NextRequest;
    prisma: typeof PrismaClient;
}

export type ResolverFunc<Args = unknown, Parent = unknown, Return = unknown> = (
    parent: Parent,
    args: Args,
    ctx: CustomContext,
    info?: GraphQLResolveInfo
) => Promise<Return>;