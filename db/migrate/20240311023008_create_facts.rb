class CreateFacts < ActiveRecord::Migration[7.1]
  def change
    create_table :facts do |t|
      t.string :label
      t.text :text
      t.references :location, null: false, foreign_key: true

      t.timestamps
    end
  end
end
