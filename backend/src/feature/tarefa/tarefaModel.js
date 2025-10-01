import { DataTypes } from "sequelize";
import { conn } from "../../config/sequelize.js";

export const tarefaModel = conn.define(
  "tarefas",
  {
    titulo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: false
    },
    data_prazo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  },
  {
    timestamps:true,
    createdAt:"created_at",
    updatedAt: "updated_at"
  }
)
