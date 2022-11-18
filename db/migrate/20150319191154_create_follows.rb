class CreateFollows < ActiveRecord::Migration
  def change
    create_table :follows do |t|
      t.column :follower, :int
      t.column :followee, :int
    end
    add_index :follows, [:follower, :followee], unique: true
  end
end
