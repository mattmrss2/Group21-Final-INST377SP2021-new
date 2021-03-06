export default (sequelize, DataTypes) => {
    const Charting = sequelize.define(
      'Charting',
      {
        charting_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        song_id: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        peak_on_chart: {
            type: DataTypes.INTEGER
        },
        weeks_on_chart: {
            type: DataTypes.INTEGER
        },
        latest_position: {
            type: DataTypes.INTEGER
        },
        last_week_on_chart: {
            type: DataTypes.DATE
        }
      },
      { tableName: "charting_info", freezeTableName: true, timestamps: false }
    );
    return Charting;
  };
  