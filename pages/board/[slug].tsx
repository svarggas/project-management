import Column from "~/components/board"

export default function Board() {

    const columns = ["To Do", "In Progress", "QA", "Done"];

    return (
        <div>
            <div className="mt-5">
                <h1>Project Name</h1>
            </div>
            <div className="mt-5 d-flex flex-row justify-content-between">
                {
                    columns.map((title, index) => (
                        <Column key={index} title={title} />
                    ))
                }
            </div>
        </div>
    )
}
