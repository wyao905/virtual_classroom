class StudentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name

  has_many :enrollments
  has_many :messages
end
