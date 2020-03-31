class CreateMessages < ActiveRecord::Migration[6.0]
  def change
    create_table :messages do |t|
      t.string :content
      t.string :date
      t.references :instructor, null: false, foreign_key: true
      t.references :student, null: false, foreign_key: true
      t.references :lecture, null: false, foreign_key: true

      t.timestamps
    end
  end
end
