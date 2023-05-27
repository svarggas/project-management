import { ResolverFunc } from '~/graphql';

interface Args {
    id: string;
}

const getTask: ResolverFunc<Args> = async (_parent, args, ctx) => {
    const { id } = args;
    const { prisma } = ctx;

    const data = await prisma.task.findUnique({
        where: { id },
        include: {
            project: true,
            user: true,
        },
    });
    return data;
}

export default getTask;