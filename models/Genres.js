export default (sequelize, DataTypes) => {
    const Genres = sequelize.define(
      'Genres',
      {
        genre_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          unique: true,
          primaryKey: true
        },
        genre_name: {
          type: DataTypes.STRING
        }
      },
      { tableName: "genre",freezeTableName: true, timestamps: false }
    );
    return Genres;
};
  