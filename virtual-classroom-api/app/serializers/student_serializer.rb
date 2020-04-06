class StudentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :email

  has_many :enrollments
  has_many :messages
  has_many :subjects, through: :enrollments
end
