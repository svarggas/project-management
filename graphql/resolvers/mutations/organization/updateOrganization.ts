import { ResolverFunc } from '~/graphql';

interface updateArgs {
    id: string
    name: string
    description: string
    members: string[]
    projects: string[]
};

const updateOrganization: ResolverFunc<updateArgs> = async (
    _parent, args, ctx, _info
) => {
    const { prisma } = ctx;
    const { id, name, description, members, projects } = args;

    if (!id) {
        throw new Error("Identifier is required");
    }

    const org = await prisma.organization.findUnique({
        where: { id },
        include: { members: true, projects: true },
    });

    if (!org) {
        throw new Error("Organization not found");
    }

    const newMembers = Array.isArray(members) && members.length ?
        members.map((id) => ({ id })) : undefined;
    const newProjects = Array.isArray(projects) && projects.length ?
        projects.map((id) => ({ id })) : undefined;

    const data = await prisma.organization.update({
        where: { id },
        data: {
            name: name !== null ? name : undefined,
            description: description !== null ? description : undefined,
            members: {
                connect: newMembers
            },
            projects: {
                connect: newProjects
            },
        },
        include: {
            members: true,
            projects: true
        }
    });

    return data;
};

export default updateOrganization;