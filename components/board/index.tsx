import TaskCard from "./TaskCard";

export default function Column(props: { title: string }) {

    const { title } = props;

    const tasks = ["Some task", "Another task", "Yet another task"];

    return (
        <div className="d-flex flex-column mx-3 w-100">
            <div className="mb-3 d-flex justify-content-between align-items-center w-100">
                <h3>{title}</h3>
                <h5><i className="bi bi-plus-circle font-weight-bold"></i></h5>
            </div>
            <div className="d-flex flex-column rounded">
                {
                    tasks.map((task, index) => (
                        <TaskCard key={index} />
                    ))
                }
            </div>
        </div>
    )
}
