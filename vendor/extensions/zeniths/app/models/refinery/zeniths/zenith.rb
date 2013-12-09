module Refinery
  module Zeniths
    class Zenith < Refinery::Core::BaseModel
      self.table_name = 'refinery_zeniths'

      attr_accessible :name, :description, :position

      acts_as_indexed :fields => [:name, :description]

      validates :name, :presence => true, :uniqueness => true
    end
  end
end
