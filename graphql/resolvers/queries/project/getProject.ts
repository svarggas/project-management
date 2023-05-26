import { ResolverFunc } from '~/graphql';

interface Args {
    id: string;
}

const getProject: ResolverFunc<Args> = async (_parent, args, ctx) => {
    const { id } = args;
    const { prisma } = ctx;

    const data = await prisma.project.findUnique({
        where: { id },
        include: {
            members: true,
            organization: true,
            tasks: true,
        },
    });

    return data;
}

export default getProject;