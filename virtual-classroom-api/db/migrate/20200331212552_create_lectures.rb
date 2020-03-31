class CreateLectures < ActiveRecord::Migration[6.0]
  def change
    create_table :lectures do |t|
      t.string :title
      t.string :date
      t.string :content
      t.references :subject, null: false, foreign_key: true

      t.timestamps
    end
  end
end
