import { ResolverFunc } from '~/graphql';

interface createArgs {
    name: string;
    description?: string;
};

const createProject: ResolverFunc<createArgs> = async (
    _parent, args, ctx, _info
) => {
    const { prisma } = ctx;
    const { name, description = "" } = args;

    if (!name) {
        throw new Error("Name is required");
    }

    const data = await prisma.project.create({
        data: {
            name,
            description,
        },
    });
    return Boolean(data);
};

export default createProject;