class Newsletter < ActiveRecord::Base
  attr_accessible :email
  validates :email, presence: true
  validates_uniqueness_of :email
end
