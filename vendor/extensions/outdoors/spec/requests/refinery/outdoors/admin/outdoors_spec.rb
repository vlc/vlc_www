# encoding: utf-8
require "spec_helper"

describe Refinery do
  describe "Outdoors" do
    describe "Admin" do
      describe "outdoors" do
        login_refinery_user

        describe "outdoors list" do
          before do
            FactoryGirl.create(:outdoor, :name => "UniqueTitleOne")
            FactoryGirl.create(:outdoor, :name => "UniqueTitleTwo")
          end

          it "shows two items" do
            visit refinery.outdoors_admin_outdoors_path
            page.should have_content("UniqueTitleOne")
            page.should have_content("UniqueTitleTwo")
          end
        end

        describe "create" do
          before do
            visit refinery.outdoors_admin_outdoors_path

            click_link "Add New Outdoor"
          end

          context "valid data" do
            it "should succeed" do
              fill_in "Name", :with => "This is a test of the first string field"
              click_button "Save"

              page.should have_content("'This is a test of the first string field' was successfully added.")
              Refinery::Outdoors::Outdoor.count.should == 1
            end
          end

          context "invalid data" do
            it "should fail" do
              click_button "Save"

              page.should have_content("Name can't be blank")
              Refinery::Outdoors::Outdoor.count.should == 0
            end
          end

          context "duplicate" do
            before { FactoryGirl.create(:outdoor, :name => "UniqueTitle") }

            it "should fail" do
              visit refinery.outdoors_admin_outdoors_path

              click_link "Add New Outdoor"

              fill_in "Name", :with => "UniqueTitle"
              click_button "Save"

              page.should have_content("There were problems")
              Refinery::Outdoors::Outdoor.count.should == 1
            end
          end

        end

        describe "edit" do
          before { FactoryGirl.create(:outdoor, :name => "A name") }

          it "should succeed" do
            visit refinery.outdoors_admin_outdoors_path

            within ".actions" do
              click_link "Edit this outdoor"
            end

            fill_in "Name", :with => "A different name"
            click_button "Save"

            page.should have_content("'A different name' was successfully updated.")
            page.should have_no_content("A name")
          end
        end

        describe "destroy" do
          before { FactoryGirl.create(:outdoor, :name => "UniqueTitleOne") }

          it "should succeed" do
            visit refinery.outdoors_admin_outdoors_path

            click_link "Remove this outdoor forever"

            page.should have_content("'UniqueTitleOne' was successfully removed.")
            Refinery::Outdoors::Outdoor.count.should == 0
          end
        end

      end
    end
  end
end
