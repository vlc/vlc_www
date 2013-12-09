module Refinery
  module Companies
    class Company < Refinery::Core::BaseModel
      self.table_name = 'refinery_companies'

      attr_accessible :name, :description, :position

      acts_as_indexed :fields => [:name, :description]

      validates :name, :presence => true, :uniqueness => true
    end
  end
end
