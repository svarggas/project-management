import { ResolverFunc } from '~/graphql';

interface updateArgs {
    id: string
    name: string
    description: string
    organization: string,
    members: string[]
    tasks: string[]
};

const updateProject: ResolverFunc<updateArgs> = async (
    _parent, args, ctx, _info
) => {
    const { prisma } = ctx;
    const { id, name, description, organization, members, tasks } = args;

    if (!id) {
        throw new Error("Identifier is required");
    }

    const project = await prisma.project.findUnique({
        where: { id },
        include: {
            organization: true,
            members: true,
            tasks: true,
        }
    });

    if (!project) {
        throw new Error("Project not found");
    }

    const newOrg = organization ? { id: organization } : undefined;
    const newMembers = Array.isArray(members) && members.length ?
        members.map((id) => ({ id })) : undefined;
    const newTasks = Array.isArray(tasks) && tasks.length ?
        tasks.map((id) => ({ id })) : undefined;

    const data = await prisma.project.update({
        where: { id },
        data: {
            name: name !== null ? name : undefined,
            description: description !== null ? description : undefined,
            organization: {
                connect: newOrg !== null ? newOrg : undefined,
            },
            members: {
                connect: newMembers
            },
            tasks: {
                connect: newTasks
            },
        },
        include: {
            organization: true,
            members: true,
            tasks: true,
        }
    });

    return data;
};

export default updateProject;