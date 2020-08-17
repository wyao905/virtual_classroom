class CreateStudents < ActiveRecord::Migration[6.0]
  def change
    create_table :students do |t|
      t.text :name
      t.text :password_digest
      t.text :email

      t.timestamps
    end
  end
end
