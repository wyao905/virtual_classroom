class SubjectSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name

  belongs_to :instructor
  has_many :enrollments
  has_many :lectures
end
