class LectureSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :created_at, :content

  belongs_to :subject
  has_many :messages
end
