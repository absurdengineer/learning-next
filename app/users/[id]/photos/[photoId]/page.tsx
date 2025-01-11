interface Props {
  params: Promise<{ id: number; photoId: number }>;
}

const UserPhotoDetailPage = async ({ params }: Props) => {
  const { id, photoId } = await params;
  return (
    <div>
      UserPhotoDetailPage for user {id} : {photoId}
    </div>
  );
};

export default UserPhotoDetailPage;
