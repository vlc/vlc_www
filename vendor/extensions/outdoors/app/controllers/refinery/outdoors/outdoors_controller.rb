module Refinery
  module Outdoors
    class OutdoorsController < ::ApplicationController

      before_filter :find_all_outdoors
      before_filter :find_page

      def index
        # you can use meta fields from your model instead (e.g. browser_title)
        # by swapping @page for @outdoor in the line below:
        present(@page)
      end

      def show
        @outdoor = Outdoor.find(params[:id])

        # you can use meta fields from your model instead (e.g. browser_title)
        # by swapping @page for @outdoor in the line below:
        present(@page)
      end

    protected

      def find_all_outdoors
        @outdoors = Outdoor.order('position ASC')
      end

      def find_page
        @page = ::Refinery::Page.where(:link_url => "/outdoors").first
      end

    end
  end
end
