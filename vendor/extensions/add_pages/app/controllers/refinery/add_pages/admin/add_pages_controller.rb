module Refinery
  module AddPages
    module Admin
      class AddPagesController < ::Refinery::AdminController

        crudify :'refinery/add_pages/add_page',
                :title_attribute => 'name', :xhr_paging => true

      end
    end
  end
end
