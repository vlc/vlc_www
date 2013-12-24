class CreateQuickContacts < ActiveRecord::Migration
  def change
    create_table :quick_contacts do |t|
      t.string :name
      t.string :email
      t.text :message
      t.timestamps
    end
  end
end
