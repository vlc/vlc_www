module Refinery
  module Outdoors
    module Admin
      class OutdoorsController < ::Refinery::AdminController

        crudify :'refinery/outdoors/outdoor',
                :title_attribute => 'name', :xhr_paging => true

      end
    end
  end
end
