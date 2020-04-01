class EnrollmentSerializer
  include FastJsonapi::ObjectSerializer
  attributes

  belongs_to :student
  belongs_to :subject
end
