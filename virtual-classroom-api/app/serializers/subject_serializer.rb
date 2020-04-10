class SubjectSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name

  belongs_to :instructor
  has_many :enrollments
  has_many :lectures
  has_many :messages
  has_many :students, through: :enrollments
end
