export default async function Page({
    params,
  }: {
    params: Promise<{ projectId: string }>
  }) {
    const projectId = (await params).projectId
    return <div>My Post: {projectId}</div>
  }