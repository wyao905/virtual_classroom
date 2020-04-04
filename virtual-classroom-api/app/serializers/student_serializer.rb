class StudentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :email

  has_many :enrollments
  has_many :messages
end
