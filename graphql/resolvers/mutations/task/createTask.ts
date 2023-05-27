import { TaskStatus, TaskType } from '@prisma/client';
import { ResolverFunc } from '~/graphql';

interface createArgs {
    name: string;
    description?: string;
    type: TaskType;
};

const createTask: ResolverFunc<createArgs> = async (
    _parent, args, ctx, _info
) => {
    const { prisma } = ctx;
    const { name, description = "", type } = args;

    if (!name) {
        throw new Error("Name is required");
    }

    if (!type) {
        throw new Error("Type of the task is required");
    }

    const data = await prisma.task.create({
        data: {
            name,
            description,
            type,
            status: TaskStatus.BACKLOG,
        },
    });
    return Boolean(data);
};

export default createTask;