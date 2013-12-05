module Refinery
  module Homes
    class Home < Refinery::Core::BaseModel
      self.table_name = 'refinery_homes'

      attr_accessible :name, :overview, :description, :position

      acts_as_indexed :fields => [:name, :overview, :description]

      validates :name, :presence => true, :uniqueness => true
    end
  end
end
