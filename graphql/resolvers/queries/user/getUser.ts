import { ResolverFunc } from '~/graphql';

interface Args {
    id: string;
}

const getUser: ResolverFunc<Args> = async (_parent, args, ctx) => {
    const { id } = args;
    const { prisma } = ctx;

    const data = await prisma.user.findUnique({
        where: { id },
        include: {
            organization: true,
            projects: true,
            tasksAssigned: true,
        },
    });
    return data;
}

export default getUser;