import { TaskStatus, TaskType } from '@prisma/client';
import { ResolverFunc } from '~/graphql';

interface updateArgs {
    id: string
    name: string
    description: string
    type: TaskType
    status: TaskStatus
    projectAssigned: string
    userAssigned: string
};

const updateTask: ResolverFunc<updateArgs> = async (
    _parent, args, ctx, _info
) => {
    const { prisma } = ctx;
    const { id, name, description, type, status, projectAssigned, userAssigned } = args;

    if (!id) {
        throw new Error("Identifier is required");
    }

    const task = await prisma.task.findUnique({
        where: { id },
        include: {
            project: true,
            user: true,
        }
    });

    if (!task) {
        throw new Error("Task not found");
    }

    const newProject = projectAssigned !== null ? { id: projectAssigned } : undefined;
    const newUser = userAssigned !== null ? { id: userAssigned } : undefined;

    const data = await prisma.task.update({
        where: { id },
        data: {
            name: name !== null ? name : undefined,
            description: description !== null ? description : undefined,
            type: type !== null ? type : TaskType.OTHER,
            status: status !== null ? status : TaskStatus.BACKLOG,
            project: {
                connect: newProject
            },
            user: {
                connect: newUser
            },
        },
        include: {
            project: true,
            user: true,
        }
    });

    return data;
};

export default updateTask;