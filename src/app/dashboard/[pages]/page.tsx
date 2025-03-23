type PageProps = {
    params: { pages: string };
};

export default async function Page({ params }: PageProps) {
    // params는 비동기적으로 처리해야 하므로, `await`을 사용
    const resolvedParams = await Promise.resolve(params);

    return (
        <div>
            <p>param: {resolvedParams.pages}</p>
        </div>
    );
}
