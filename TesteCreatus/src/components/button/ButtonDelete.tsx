import React from 'react';
import { deleteUser } from '../../api/Api';

interface ButtonDeleteProps {
  userId: any;
  onUserDeleted: () => void;
}

export const ButtonDelete: React.FC<ButtonDeleteProps> = ({ userId, onUserDeleted }) => {
    const handleDelete = async () => {
      await deleteUser(userId);
      onUserDeleted();
    };

  return <img onClick={handleDelete} style={{height: '30px'}} src="./src/assets/trash.png"></img>;
};
