

interface Props {
    id: string;
    title: string;
    description: string;
}
export function Section({ id, title, description, children }: React.PropsWithChildren<Props>) {
    return (
        <section id={id} className="py-10 lg:py-20">
            <div>
                <h2 className="text-center mb-4">{title}</h2>
            </div>
            <p className="mb-12 text-center">{description}</p>
            {children}
        </section>
    );
}