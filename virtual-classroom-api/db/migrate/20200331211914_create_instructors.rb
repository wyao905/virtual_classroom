class CreateInstructors < ActiveRecord::Migration[6.0]
  def change
    create_table :instructors do |t|
      t.text :name
      t.text :password_digest
      t.text :email

      t.timestamps
    end
  end
end
