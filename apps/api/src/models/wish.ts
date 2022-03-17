import { DataTypes } from 'sequelize';
import { db } from './sequelize';

export const WishRepo = db.define('Wish', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastUpdateAt: {
    type: DataTypes.DATE,
  },
});
