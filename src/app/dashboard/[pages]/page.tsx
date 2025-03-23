type PageProps = {
    params: Promise<{ pages: string }>;
};

export default async function Page({ params }: PageProps) {
    const resolvedParams = await params;  // await으로 해결

    return (
        <div>
            <p>param: {resolvedParams.pages}</p>
        </div>
    );
}
