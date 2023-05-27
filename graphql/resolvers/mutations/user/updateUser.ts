import { ResolverFunc } from '~/graphql';

interface updateArgs {
    id: string
    email: string
    name: string
    organization: string
    projects: string[]
    tasksAssigned: string[]
};

const updateUser: ResolverFunc<updateArgs> = async (
    _parent, args, ctx, _info
) => {
    const { prisma } = ctx;
    const { id, email, name, organization, projects, tasksAssigned } = args;

    if (!id) {
        throw new Error("Identifier is required");
    }

    const user = await prisma.user.findUnique({
        where: { id },
        include: {
            organization: true,
            projects: true,
            tasksAssigned: true,
        }
    });

    if (!user) {
        throw new Error("Task not found");
    }

    const newOrganization = organization !== null ? { id: organization } : undefined;
    const newProjects = Array.isArray(projects) && projects.length ?
        projects.map((id) => ({ id })) : undefined;
    const newTasks = Array.isArray(tasksAssigned) && tasksAssigned.length ?
        tasksAssigned.map((id) => ({ id })) : undefined;

    const data = await prisma.user.update({
        where: { id },
        data: {
            name,
            email,
            organization: {
                connect: newOrganization
            },
            projects: {
                connect: newProjects
            },
            tasksAssigned: {
                connect: newTasks
            },
        },
        include: {
            organization: true,
            projects: true,
            tasksAssigned: true,
        }
    });

    return data;
};

export default updateUser;