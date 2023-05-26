import { ResolverFunc } from '~/graphql';

interface Args {
    id: string;
}

const getOrganization: ResolverFunc<Args> = async (_parent, args, ctx) => {
    const { id } = args;
    const { prisma } = ctx;

    const data = await prisma.organization.findUnique({
        where: { id }
    });

    return data;
}

export default getOrganization;