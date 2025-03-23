type PageProps = {
    params: {
        pages: string;
    };
};

export default function Page({ params }: PageProps) {
    return (
        <div>
            <p>param: {params.pages}</p>
        </div>
    );
}
