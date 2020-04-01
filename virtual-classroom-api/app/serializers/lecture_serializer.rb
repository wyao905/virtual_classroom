class LectureSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :date, :content

  belongs_to :subject
  has_many :messages
end
