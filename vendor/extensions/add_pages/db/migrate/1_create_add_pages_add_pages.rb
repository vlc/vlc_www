class CreateAddPagesAddPages < ActiveRecord::Migration

  def up
    create_table :refinery_add_pages do |t|
      t.string :name
      t.text :description
      t.integer :position

      t.timestamps
    end

  end

  def down
    if defined?(::Refinery::UserPlugin)
      ::Refinery::UserPlugin.destroy_all({:name => "refinerycms-add_pages"})
    end

    if defined?(::Refinery::Page)
      ::Refinery::Page.delete_all({:link_url => "/add_pages/add_pages"})
    end

    drop_table :refinery_add_pages

  end

end
