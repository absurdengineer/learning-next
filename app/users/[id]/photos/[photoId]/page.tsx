import React from "react";

interface Props {
  params: { id: number; photoId: number };
}

const UserPhotoDetailPage = ({ params: { id, photoId } }: Props) => {
  return (
    <div>
      UserPhotoDetailPage for user {id}'s {photoId}
    </div>
  );
};

export default UserPhotoDetailPage;
